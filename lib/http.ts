type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface RequestConfig extends Omit<RequestInit, "method"> {
  params?: Record<string, string | number | boolean>;
}

interface ApiError {
  message: string;
  status: number;
  errorData?: any;
}

class HttpClient {
  private baseURL: string;

  constructor(baseURL = "/api") {
    this.baseURL = baseURL;
  }

  private buildURL(
    endpoint: string,
    params?: Record<string, string | number | boolean>
  ): string {
    const url = new URL(`${this.baseURL}${endpoint}`, window.location.origin);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    return url.toString();
  }

  private async request<T>(
    endpoint: string,
    method: HttpMethod,
    options: RequestConfig = {}
  ) {
    const { params, headers, ...restOptions } = options;
    const url = this.buildURL(endpoint, params);

    const config: RequestInit = {
      method,
      credentials: "include", // Critical for Better Auth cookies
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...restOptions,
    };

    try {
      const response = await fetch(url, config);

      // Handle 401 - Better Auth will redirect or handle this
      if (response.status === 401) {
        // Dispatch event for app-level handling (e.g., redirect to login)
        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("auth:unauthorized"));
        }
      }

      // Parse response
      const contentType = response.headers.get("content-type");
      const isJson = contentType?.includes("application/json");
      const result = isJson ? await response.json() : await response.text();

      if (!response.ok) {
        const error: ApiError = {
          message:
            result?.message ||
            result?.error ||
            `HTTP error! status: ${response.status}`,
          status: response.status,
          errorData: result,
        };
        throw error;
      }

      const payload: T = result;
      const data = {
        status: response.status,
        payload,
      };
      return data;
    } catch (error) {
      // Re-throw ApiError as-is
      if ((error as ApiError).status) {
        throw error;
      }

      // Network or other errors
      console.error(`API request failed: ${method} ${endpoint}`, error);
      throw {
        message: error instanceof Error ? error.message : "Network error",
        status: 0,
        errorData: null,
      } as ApiError;
    }
  }

  async get<T>(endpoint: string, config?: RequestConfig) {
    return this.request<T>(endpoint, "GET", config);
  }

  async post<T>(endpoint: string, data?: any, config?: RequestConfig) {
    return this.request<T>(endpoint, "POST", {
      ...config,
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: any, config?: RequestConfig) {
    return this.request<T>(endpoint, "PUT", {
      ...config,
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async patch<T>(endpoint: string, data?: any, config?: RequestConfig) {
    return this.request<T>(endpoint, "PATCH", {
      ...config,
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string, config?: RequestConfig) {
    return this.request<T>(endpoint, "DELETE", config);
  }

  // For file uploads
  async upload<T>(
    endpoint: string,
    formData: FormData,
    config?: RequestConfig
  ) {
    const { headers, ...restConfig } = config || {};
    return this.request<T>(endpoint, "POST", {
      ...restConfig,
      headers: {
        // Don't set Content-Type for FormData, browser will set it with boundary
        ...headers,
      },
      body: formData as any,
    });
  }
}

export const httpClient = new HttpClient();
export type { ApiError };

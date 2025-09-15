class HttpClient {
  private baseURL: string;
  private authToken: string | null = null;

  constructor(baseURL = "/api") {
    this.baseURL = baseURL;
  }

  setAuthToken(token: string | null) {
    this.authToken = token;
  }

  private getAuthToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("auth_token") || this.authToken;
    }
    return this.authToken;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const token = this.getAuthToken();
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...(options.headers as Record<string, string>),
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const config: RequestInit = {
      ...options,
      headers,
    };

    try {
      const response = await fetch(url, config);

      if (response.status === 401) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("auth_token");
        }
        this.authToken = null;

        if (typeof window !== "undefined") {
          window.dispatchEvent(new CustomEvent("auth:unauthorized"));
        }
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || `HTTP error! status: ${response.status}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    }
  }

  async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: "GET" });
  }

  async post<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: any): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, { method: "DELETE" });
  }
}

export const authHelpers = {
  setToken: (token: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("auth_token", token);
    }
    httpClient.setAuthToken(token);
  },

  clearToken: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("auth_token");
    }
    httpClient.setAuthToken(null);
  },

  getToken: () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("auth_token");
    }
    return null;
  },
};

export const httpClient = new HttpClient();

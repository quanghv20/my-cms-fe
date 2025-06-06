class ConfigService {
    get apiBaseUrl(): string {
      const url = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!url) throw new Error('Missing NEXT_PUBLIC_API_BASE_URL');
      return url;
    }
  
    get timeout(): number {
      return Number(process.env.NEXT_PUBLIC_API_TIMEOUT || 5000);
    }
  
    get isDev(): boolean {
      return process.env.NODE_ENV === 'development';
    }
  
    get isProd(): boolean {
      return process.env.NODE_ENV === 'production';
    }
  }
  
  export const configService = new ConfigService();
  
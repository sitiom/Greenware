export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          average_rating: number | null
          created_at: string | null
          discount: number | null
          discount_price: number | null
          id: number
          name: string | null
          price: number | null
        }
        Insert: {
          average_rating?: number | null
          created_at?: string | null
          discount?: number | null
          discount_price?: number | null
          id?: number
          name?: string | null
          price?: number | null
        }
        Update: {
          average_rating?: number | null
          created_at?: string | null
          discount?: number | null
          discount_price?: number | null
          id?: number
          name?: string | null
          price?: number | null
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
      }
      reviews: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          product_id: number | null
          profile_id: string | null
          rating: number | null
          title: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          product_id?: number | null
          profile_id?: string | null
          rating?: number | null
          title?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          product_id?: number | null
          profile_id?: string | null
          rating?: number | null
          title?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

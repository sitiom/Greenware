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
      cart_products: {
        Row: {
          created_at: string | null
          id: number
          product_id: number | null
          profile_id: string | null
          quantity: number | null
          total: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          product_id?: number | null
          profile_id?: string | null
          quantity?: number | null
          total?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          product_id?: number | null
          profile_id?: string | null
          quantity?: number | null
          total?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cart_products_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cart_products_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      favorites: {
        Row: {
          id: number
          product_id: number | null
          profile_id: string | null
        }
        Insert: {
          id?: number
          product_id?: number | null
          profile_id?: string | null
        }
        Update: {
          id?: number
          product_id?: number | null
          profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "favorites_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorites_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      line_items: {
        Row: {
          cart_prod_id: number | null
          created_at: string | null
          id: number
          order_id: number | null
        }
        Insert: {
          cart_prod_id?: number | null
          created_at?: string | null
          id?: number
          order_id?: number | null
        }
        Update: {
          cart_prod_id?: number | null
          created_at?: string | null
          id?: number
          order_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "line_items_cart_prod_id_fkey"
            columns: ["cart_prod_id"]
            referencedRelation: "cart_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "line_items_order_id_fkey"
            columns: ["order_id"]
            referencedRelation: "orders"
            referencedColumns: ["id"]
          }
        ]
      }
      orders: {
        Row: {
          created_at: string | null
          id: number
          shipping_address_id: number | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          shipping_address_id?: number | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          shipping_address_id?: number | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_shipping_address_id_fkey"
            columns: ["shipping_address_id"]
            referencedRelation: "shipping_addresses"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          average_rating: number | null
          created_at: string | null
          discount: number | null
          discount_price: number | null
          id: number
          name: string | null
          price: number | null
          url: string | null
        }
        Insert: {
          average_rating?: number | null
          created_at?: string | null
          discount?: number | null
          discount_price?: number | null
          id?: number
          name?: string | null
          price?: number | null
          url?: string | null
        }
        Update: {
          average_rating?: number | null
          created_at?: string | null
          discount?: number | null
          discount_price?: number | null
          id?: number
          name?: string | null
          price?: number | null
          url?: string | null
        }
        Relationships: []
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
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
        Relationships: [
          {
            foreignKeyName: "reviews_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      salvaged_devices: {
        Row: {
          brand: string | null
          created_at: string | null
          id: number
          is_working: boolean | null
          memory: string | null
          name: string | null
          profiles_id: string | null
          status: string | null
          storage: string | null
          url: string | null
        }
        Insert: {
          brand?: string | null
          created_at?: string | null
          id?: number
          is_working?: boolean | null
          memory?: string | null
          name?: string | null
          profiles_id?: string | null
          status?: string | null
          storage?: string | null
          url?: string | null
        }
        Update: {
          brand?: string | null
          created_at?: string | null
          id?: number
          is_working?: boolean | null
          memory?: string | null
          name?: string | null
          profiles_id?: string | null
          status?: string | null
          storage?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "salvaged_devices_profiles_id_fkey"
            columns: ["profiles_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      salvaged_parts: {
        Row: {
          created_at: string | null
          id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
        }
        Update: {
          created_at?: string | null
          id?: number
        }
        Relationships: []
      }
      shipping_addresses: {
        Row: {
          address_line_one: string | null
          address_line_two: string | null
          barangay: string | null
          created_at: string | null
          full_name: string | null
          id: number
          postal_code: number | null
          province: string | null
          region: string | null
        }
        Insert: {
          address_line_one?: string | null
          address_line_two?: string | null
          barangay?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: number
          postal_code?: number | null
          province?: string | null
          region?: string | null
        }
        Update: {
          address_line_one?: string | null
          address_line_two?: string | null
          barangay?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: number
          postal_code?: number | null
          province?: string | null
          region?: string | null
        }
        Relationships: []
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

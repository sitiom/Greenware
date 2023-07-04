export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      cart_products: {
        Row: {
          created_at: string
          id: number
          product_id: number | null
          profile_id: string | null
          quantity: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          product_id?: number | null
          profile_id?: string | null
          quantity?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          product_id?: number | null
          profile_id?: string | null
          quantity?: number | null
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
          created_at: string
          id: number
          order_id: number | null
        }
        Insert: {
          cart_prod_id?: number | null
          created_at?: string
          id?: number
          order_id?: number | null
        }
        Update: {
          cart_prod_id?: number | null
          created_at?: string
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
          created_at: string
          id: number
          shipping_address_id: number | null
          status: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          shipping_address_id?: number | null
          status?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          shipping_address_id?: number | null
          status?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          average_rating: number | null
          created_at: string
          discount: number | null
          discount_price: number | null
          id: number
          name: string | null
          price: number | null
          profile_id: string | null
          url: string | null
        }
        Insert: {
          average_rating?: number | null
          created_at?: string
          discount?: number | null
          discount_price?: number | null
          id?: number
          name?: string | null
          price?: number | null
          profile_id?: string | null
          url?: string | null
        }
        Update: {
          average_rating?: number | null
          created_at?: string
          discount?: number | null
          discount_price?: number | null
          id?: number
          name?: string | null
          price?: number | null
          profile_id?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
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
          created_at: string
          description: string | null
          id: number
          product_id: number | null
          profile_id: string | null
          rating: number | null
          title: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          product_id?: number | null
          profile_id?: string | null
          rating?: number | null
          title?: string | null
        }
        Update: {
          created_at?: string
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
          created_at: string
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
          created_at?: string
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
          created_at?: string
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
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      shipping_addresses: {
        Row: {
          address_line_one: string | null
          address_line_two: string | null
          barangay: string | null
          created_at: string
          full_name: string | null
          id: number
          postal_code: number | null
          profile_id: string | null
          province: string | null
          region: string | null
        }
        Insert: {
          address_line_one?: string | null
          address_line_two?: string | null
          barangay?: string | null
          created_at?: string
          full_name?: string | null
          id?: number
          postal_code?: number | null
          profile_id?: string | null
          province?: string | null
          region?: string | null
        }
        Update: {
          address_line_one?: string | null
          address_line_two?: string | null
          barangay?: string | null
          created_at?: string
          full_name?: string | null
          id?: number
          postal_code?: number | null
          profile_id?: string | null
          province?: string | null
          region?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shipping_addresses_profile_id_fkey"
            columns: ["profile_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
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
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buckets_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "objects_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

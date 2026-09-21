export type ShipmentStatus =
  | "BOOKING_CONFIRMED" | "PICKUP_SCHEDULED" | "PICKED_UP" | "PROCESSING"
  | "ORIGIN_HUB" | "FLIGHT_SCHEDULED" | "FLIGHT_DEPARTED" | "IN_TRANSIT"
  | "DESTINATION_ARRIVED" | "CUSTOMS_CLEARANCE" | "OUT_FOR_DELIVERY"
  | "DELIVERED" | "EXCEPTION";

export interface TrackingEvent {
  status: ShipmentStatus;
  location: string;
  description: string;
  timestamp: string;
}

export interface Shipment {
  id: string;
  awb: string;
  shipment_type: string;
  origin: string;
  destination: string;
  current_location: string;
  status: ShipmentStatus;
  estimated_delivery?: string;
  weight_kg: number;
  package_count: number;
  flight_number?: string;
  last_updated: string;
  tracking_history: TrackingEvent[];
}

export interface QuoteRequest {
  shipment_type: string;
  origin_country: string;
  origin_city: string;
  destination_country: string;
  destination_city: string;
  weight_kg: number;
  package_count: number;
  length_cm?: number;
  width_cm?: number;
  height_cm?: number;
  customer_name: string;
  phone: string;
  email: string;
  pickup_address: string;
  delivery_address: string;
  description: string;
  preferred_service: string;
  notes?: string;
}

export interface PickupRequest {
  customer_name: string;
  phone: string;
  email: string;
  pickup_address: string;
  city: string;
  postal_code: string;
  shipment_type: string;
  weight_kg: number;
  package_count: number;
  preferred_date: string;
  preferred_time: string;
  special_instructions?: string;
}
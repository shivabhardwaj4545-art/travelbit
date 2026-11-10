import { prisma } from "./prisma";

export interface StoredInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  destination?: string;
  travelDate?: string;
  travelers: number;
  message?: string;
  packageId?: string;
  status: "NEW" | "CONTACTED" | "QUOTED" | "CLOSED";
  createdAt: string;
}

// In-memory fallback if database connection is pending
const fallbackInquiries: StoredInquiry[] = [
  {
    id: "inq-sample-1",
    name: "Rajesh Sharma",
    email: "rajesh.sharma@example.com",
    phone: "+91 98112 34567",
    destination: "Char Dham Yatra 11N/12D",
    travelDate: "2026-05-15",
    travelers: 4,
    message: "Looking for senior citizen friendly hotels and VIP darshan in Kedarnath.",
    status: "NEW",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    id: "inq-sample-2",
    name: "Sneha Patel",
    email: "sneha.patel@example.com",
    phone: "+91 99099 87654",
    destination: "Jim Corbett Wildlife Safari",
    travelDate: "2026-04-10",
    travelers: 2,
    message: "Interested in Dhikala zone night stay and open gypsy jeep safaris.",
    status: "CONTACTED",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
];

export async function createInquiry(data: {
  name: string;
  email: string;
  phone: string;
  destination?: string;
  travelDate?: string;
  travelers: number;
  message?: string;
  packageId?: string;
}): Promise<StoredInquiry> {
  if (process.env.DATABASE_URL) {
    try {
      const record = await prisma.inquiry.create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          destination: data.destination,
          travelDate: data.travelDate,
          travelers: data.travelers,
          message: data.message,
          packageId: data.packageId,
          status: "NEW",
        },
      });
      return {
        ...record,
        destination: record.destination ?? undefined,
        travelDate: record.travelDate ?? undefined,
        message: record.message ?? undefined,
        packageId: record.packageId ?? undefined,
        status: record.status as StoredInquiry["status"],
        createdAt: record.createdAt.toISOString(),
      };
    } catch (err) {
      console.warn("Prisma inquiry create failed, fallback to memory:", err);
    }
  }

  const newRecord: StoredInquiry = {
    id: `inq-${Date.now()}`,
    ...data,
    status: "NEW",
    createdAt: new Date().toISOString(),
  };
  fallbackInquiries.unshift(newRecord);
  return newRecord;
}

export async function getInquiries(): Promise<StoredInquiry[]> {
  if (process.env.DATABASE_URL) {
    try {
      const records = await prisma.inquiry.findMany({
        orderBy: { createdAt: "desc" },
      });
      if (records && records.length > 0) {
        return records.map((r) => ({
          ...r,
          destination: r.destination ?? undefined,
          travelDate: r.travelDate ?? undefined,
          message: r.message ?? undefined,
          packageId: r.packageId ?? undefined,
          status: r.status as StoredInquiry["status"],
          createdAt: r.createdAt.toISOString(),
        }));
      }
    } catch (err) {
      console.warn("Prisma inquiry list failed, returning fallback:", err);
    }
  }
  return fallbackInquiries;
}

export async function updateInquiryStatus(
  id: string,
  status: StoredInquiry["status"]
): Promise<boolean> {
  if (process.env.DATABASE_URL) {
    try {
      await prisma.inquiry.update({
        where: { id },
        data: { status },
      });
      return true;
    } catch (err) {
      console.warn("Prisma status update failed:", err);
    }
  }

  const item = fallbackInquiries.find((i) => i.id === id);
  if (item) {
    item.status = status;
    return true;
  }
  return false;
}


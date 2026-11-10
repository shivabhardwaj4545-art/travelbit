import { PrismaClient } from "@prisma/client";
import { packagesData } from "../data/packagesData";
import { destinationsData } from "../data/destinationsData";
import { blogsData } from "../data/blogsData";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding TravelBit Holidays database...");

  // Seed Destinations
  for (const dest of destinationsData) {
    await prisma.destination.upsert({
      where: { slug: dest.slug },
      update: {},
      create: {
        id: dest.id,
        slug: dest.slug,
        name: dest.name,
        tagline: dest.tagline,
        description: dest.description,
        coverImage: dest.coverImage,
        bestTimeToVisit: dest.bestTimeToVisit,
        altitude: dest.altitude,
        district: dest.district,
        division: dest.division,
        coordinates: JSON.stringify({}),
        popularFor: JSON.stringify(dest.popularFor),
      },
    });
  }
  console.log(`✓ Seeded ${destinationsData.length} destinations.`);

  // Seed Packages
  for (const pkg of packagesData) {
    await prisma.package.upsert({
      where: { slug: pkg.slug },
      update: {},
      create: {
        id: pkg.id,
        slug: pkg.slug,
        title: pkg.title,
        tagline: pkg.tagline,
        destination: pkg.destination,
        region: pkg.region,
        categorySlug: pkg.category.toLowerCase().replace(/[^a-z0-9]/g, "-"),
        durationDays: pkg.durationDays,
        durationNights: pkg.durationNights,
        price: pkg.price,
        originalPrice: pkg.originalPrice,
        rating: pkg.rating,
        reviewCount: pkg.reviewCount,
        featured: pkg.featured,
        bestseller: false,
        coverImage: pkg.coverImage,
        gallery: JSON.stringify(pkg.gallery),
        highlights: JSON.stringify(pkg.highlights),
        inclusions: JSON.stringify(pkg.inclusions),
        exclusions: JSON.stringify(pkg.exclusions),
        itinerary: JSON.stringify(pkg.itinerary),
        faqs: JSON.stringify(pkg.faqs),
      },
    });
  }
  console.log(`✓ Seeded ${packagesData.length} tour packages.`);

  // Seed Blogs
  for (const blog of blogsData) {
    await prisma.blogPost.upsert({
      where: { slug: blog.slug },
      update: {},
      create: {
        id: blog.id,
        slug: blog.slug,
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        coverImage: blog.coverImage,
        author: blog.author,
        readTime: blog.readTime,
        tags: JSON.stringify(blog.tags),
      },
    });
  }
  console.log(`✓ Seeded ${blogsData.length} blog posts.`);

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


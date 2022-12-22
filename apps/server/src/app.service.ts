import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { MongoClient } from 'mongodb';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getHello() {
    // const users = await this.prisma.user.findMany();
    const client = new MongoClient(
      'mongodb+srv://matheus:matheus@cluster0.yxhrvak.mongodb.net/?retryWrites=true&w=majority',
    );

    const db = client.db('sample_airbnb');
    const collection = db.collection('listingsAndReviews');
    const listings = await collection.find().limit(1000).toArray();

    for (let i = 0; i < listings.length; i++) {
      const listing: any = listings[i];
      try {
        await this.prisma.listing.create({
          data: {
            name: listing.name,
            summary: listing.summary,
            space: listing.space,
            description: listing.description,
            neighborhood_overview: listing.neighborhood_overview,
            notes: listing.notes,
            transit: listing.transit,
            access: listing.access,
            interaction: listing.interaction,
            house_rules: listing.house_rules,
            property_type: listing.property_type,
            room_type: listing.room_type,
            bed_type: listing.room_type,
            minimum_nights: parseInt(listing.minimum_nights),
            maximum_nights: parseInt(listing.maximum_nights),
            cancellation_policy: listing.cancellation_policy,
            last_scraped: listing.last_scraped,
            calendar_last_scraped: listing.calendar_last_scraped,
            first_review: listing.first_review,
            last_review: listing.last_review,
            accommodates: listing.accommodates || 0,
            bedrooms: parseFloat(listing.bedrooms) || 0,
            beds: parseFloat(listing.beds) || 0,
            number_of_reviews: parseFloat(listing.number_of_reviews) || 0,
            bathrooms: parseFloat(listing.bathrooms) || 0,
            price: parseFloat(listing.price),
            weakly_price: parseFloat(listing.weakly_price),
            monthly_price: parseFloat(listing.monthly_price),
            security_deposit: parseFloat(listing.security_deposit),
            cleaning_fee: parseFloat(listing.cleaning_fee),
            extra_people: parseFloat(listing.extra_people),
            guests_included: parseFloat(listing.guests_included),
            address: {
              create: {
                street: listing.address.street,
                suburb: listing.address.suburb,
                government_area: listing.address.government_area,
                market: listing.address.market,
                country: listing.address.country,
                country_code: listing.address.country_code,
                coordinate_x: listing.address.location.coordinates[0],
                coordinate_y: listing.address.location.coordinates[1],
              },
            },
            scores: {
              create: {
                accuracy: listing.review_scores.review_scores_accuracy,
                cleanliness: listing.review_scores.review_scores_cleanliness,
                checkin: listing.review_scores.review_scores_checkin,
                communication:
                  listing.review_scores.review_scores_communication,
                location: listing.review_scores.review_scores_location,
                value: listing.review_scores.review_scores_value,
                rating: listing.review_scores.review_scores_rating,
              },
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
    return this.prisma.listing.findMany({
      include: { address: true, scores: true, reviews: true },
      take: 10,
    });
  }
}

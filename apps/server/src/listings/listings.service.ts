import { Injectable } from '@nestjs/common';
import { Address, Listing, PrismaPromise, Scores } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';

@Injectable()
export class ListingsService {
  constructor(private prisma: PrismaService) {}

  create(createListingDto: CreateListingDto) {
    return 'This action adds a new listing';
  }

  findAll(): PrismaPromise<
    (Pick<Listing, 'id' | 'name' | 'price' | 'number_of_reviews'> & {
      address: Pick<Address, 'street'>;
    } & {
      scores: Pick<Scores, 'rating'>;
    })[]
  > {
    return this.prisma.listing.findMany({
      select: {
        id: true,
        name: true,
        price: true,
        number_of_reviews: true,
        address: {
          select: {
            street: true,
          },
        },
        scores: {
          select: {
            rating: true,
          },
        },
      },
      take: 4,
    });
  }

  findOne(id: string) {
    return this.prisma.listing.findUnique({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateListingDto: UpdateListingDto) {
    return `This action updates a #${id} listing`;
  }

  remove(id: number) {
    return `This action removes a #${id} listing`;
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateListingDto } from './dto/create-listing.dto';
import { UpdateListingDto } from './dto/update-listing.dto';

@Injectable()
export class ListingsService {
  constructor(private prisma: PrismaService) {}

  create(createListingDto: CreateListingDto) {
    return 'This action adds a new listing';
  }

  findAll() {
    return this.prisma.listing.findMany({ take: 10 });
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

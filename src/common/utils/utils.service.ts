import { Injectable } from '@nestjs/common';
import { ApiResponse } from '../interface/response.interface';

@Injectable()
export class UtilsService {
  public filterDate(compareDate: string, from: string, to: string): boolean {
    const date: Date = new Date(compareDate);
    const fromDate: Date = new Date(from);
    const toDate: Date = new Date(to);
    return date >= fromDate && date <= toDate;
  }

  public filterByPage<T>(
    data: T[],
    page: string,
    take: string,
  ): ApiResponse<T> {
    const pages = Math.ceil(data.length / +take);
    const pagination = this.pagination(pages, +take);
    let offset: number = pagination[+page - 1];
    if (+page > pages) {
      offset = pagination[pagination.length - 1];
    }
    const items2 = [...data];
    const items = items2.splice(offset, +take);
    const res = {
      hasItems: !!items.length,
      items,
      total: items.length,
      page: +page,
      pages,
    };
    return res;
  }

  private pagination(totalPages: number, take: number): number[] {
    const pages: number[] = Array(totalPages).fill(0);
    const paginate: number[] = pages.map((page: number, index: number) => {
      return index > 0 ? (page = index * Number(take)) : 0;
    });
    return paginate;
  }
}

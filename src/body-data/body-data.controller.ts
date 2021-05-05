import {
  Controller,
  Res,
  Query,
  Get,
  HttpStatus,
  Post,
  Body,
  Param,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { BodyDataService } from './body-data.service';
import { CreateBodyDataDTO } from './dto/body-data.dto';
@Controller('body-data')
export class BodyDataController {
  constructor(private readonly BodyDataService: BodyDataService) {}
  @Post('/create')
  async addCustomer(@Res() res, @Body() CreateBodyDataDTO: CreateBodyDataDTO) {
    const lists = await this.BodyDataService.create(CreateBodyDataDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Post has been created successfully',
      lists,
    });
  }
  @Get('all')
  async findAll(@Res() res) {
    const lists = await this.BodyDataService.findAll();
    return res.status(HttpStatus.OK).json(lists);
  }
  @Get('id')
  async findById(@Res() res, @Query('id') id: string) {
    const lists = await this.BodyDataService.findById(id);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json(lists);
  }
  @Put('/update')
  async update(
    @Res() res,
    @Query('id') id: string,
    @Body() CreateBodyDataDTO: CreateBodyDataDTO,
  ) {
    const lists = await this.BodyDataService.update(id, CreateBodyDataDTO);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Post has been successfully updated',
      lists,
    });
  }
  @Delete('/delete')
  async delete(@Res() res, @Query('id') id: string) {
    const lists = await this.BodyDataService.delete(id);
    if (!lists) throw new NotFoundException('Post does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Post has been deleted',
      lists,
    });
  }
}

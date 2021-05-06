import { ApiProperty } from '@nestjs/swagger';
export class CreateBodyDataDTO {
  @ApiProperty()
  readonly height: number;

  @ApiProperty()
  readonly weight: number;

  @ApiProperty()
  readonly date: string;

  @ApiProperty()
  readonly bmi: number;

  @ApiProperty()
  readonly user: string;
}

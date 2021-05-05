import { ApiProperty } from '@nestjs/swagger';
export class CreateBodyDataDTO {
  @ApiProperty()
  readonly height: string;

  @ApiProperty()
  readonly weight: string;

  @ApiProperty()
  readonly dob: string;

  @ApiProperty()
  readonly bmi: number;

  @ApiProperty()
  readonly user: string;
}

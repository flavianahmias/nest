import { ApiProperty } from '@nestjs/swagger';
import { RoleEnum } from 'src/enums/role.enum';

export class changeUserRoleDTO {
  @ApiProperty()
  userId: number;
  @ApiProperty()
  role: RoleEnum;
}

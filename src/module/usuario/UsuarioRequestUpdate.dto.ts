import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDTO } from './UsuarioRequest.dto';

export class UpdateUsuarioDTO extends PartialType(CreateUsuarioDTO) {}

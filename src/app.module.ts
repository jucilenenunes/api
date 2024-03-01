import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjetosModule } from './modules/projetos.module'

@Module({
  imports: [ProjetosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

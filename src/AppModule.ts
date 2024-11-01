import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './about/about.module';
import { CookingModule } from './cooking/cooking.module';
import { GameDevModule } from './game-dev/game-dev.module';
import { WorkModule } from './work/work.module';

@Module({
  imports: [AboutModule, CookingModule, GameDevModule, WorkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

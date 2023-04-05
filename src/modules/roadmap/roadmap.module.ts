import { Module } from '@nestjs/common';
import { RoadmapController } from './roadmap.controller';
import { DatabaseModule } from 'src/app/config/database/db.module';
import { CreateRoadmapService } from './services/createRoadmap.service';
import { UpdateRoadmapService } from './services/updateRoadmap.service';
import { ListRoadmapService } from './services/listRoadmap.service';

@Module({
  imports: [DatabaseModule],
  controllers: [RoadmapController],
  providers: [CreateRoadmapService, UpdateRoadmapService, ListRoadmapService]
})
export class RoadmapModule { }

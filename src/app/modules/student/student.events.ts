import { RedisClient } from '../../../shared/redis';
import {
  EVENT_STUDENT_CREATED,
  EVENT_STUDENT_UPDATED,
} from './student.constants';
import { StudentService } from './student.service';

const initStudentEvent = () => {
  RedisClient.subscribe(EVENT_STUDENT_CREATED, async e => {
    const data = JSON.parse(e);
    await StudentService.createStudentFromEvent(data);
  });
  RedisClient.subscribe(EVENT_STUDENT_UPDATED, async (e: string) => {
    const data = JSON.parse(e);

    await StudentService.updateStudentFromEvent(data);
  });
};

export default initStudentEvent;

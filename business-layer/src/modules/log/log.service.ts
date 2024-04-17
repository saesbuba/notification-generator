import { Injectable, Scope } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable({ scope: Scope.DEFAULT })
export class LogService {
  private logsPath = path.join(process.cwd(), '/logs');
  private notificationsLogFolderName = 'notifications-log.json';

  async write(data: any) {
    const notificationsLogPath = path.join(
      this.logsPath,
      this.notificationsLogFolderName,
    );

    if (!fs.existsSync(this.logsPath)) {
      fs.mkdirSync(this.logsPath);
    }

    const fileContent = await fs.promises
      .readFile(notificationsLogPath, 'utf8')
      .catch((error) =>
        console.warn(
          "'notifications-log.json' file does not exist, it will be created",
        ),
      );

    let newLogs;
    if (fileContent) {
      const existingLogs = JSON.parse(fileContent);
      newLogs = JSON.stringify(existingLogs.concat(data));
      await fs.promises
        .writeFile(notificationsLogPath, newLogs)
        .catch((error) => {
          console.error(error.message);
          throw new Error('Was an error when trying to update logs');
        });
    } else {
      newLogs = JSON.stringify(data);
      await fs.promises
        .appendFile(notificationsLogPath, newLogs)
        .catch((error) => {
          console.error(error.message);
          throw new Error('Was an error when trying to create new logs');
        });
    }

    return true;
  }

  async findAll() {
    const notificationsLogPath = path.join(
      this.logsPath,
      this.notificationsLogFolderName,
    );

    const fileContent = await fs.promises
      .readFile(notificationsLogPath, 'utf8')
      .catch((error) => console.error(error.message));

    if (!fileContent) {
      return [];
    } else {
      return JSON.parse(fileContent);
    }
  }
}

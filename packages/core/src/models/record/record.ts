import type { FieldCore } from '../field';
import type { IRecordFields } from './interface';

export class RecordCore {
  constructor(protected fields: { [fieldId: string]: FieldCore }, protected data: IRecordFields) {}

  commentCount!: number;

  createdTime!: Date;

  id!: string;

  isDeleted = false;

  name!: string;

  getCellValue(fieldId: string): unknown {
    return this.data[fieldId];
  }

  getCellValueAsString(fieldId: string) {
    this.fields[fieldId].cellValue2String(this.data[fieldId]);
  }
}

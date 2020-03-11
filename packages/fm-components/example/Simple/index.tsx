import * as React from 'react';

import { FileType, UfFileManager } from '../../src';

import { dummyFileSystem } from './dummyFileSystem';

const consoleEntry = (param?: any) => {
  console.log('entry', param);
};

export default function Simple() {
  return (
    <UfFileManager
      fileMap={dummyFileSystem}
      currentPath="/apps"
      onEnter={consoleEntry}
      onClickPreview={(entry: FileType) => alert(`preview ${entry.name}`)}
    />
  );
}

import React, { ChangeEvent, Dispatch, SetStateAction, useCallback, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface PropTypes {
  modifyContents: string;
  setModifyContents: Dispatch<SetStateAction<string>>;
  onModifyTodo: () => void;
  handleClose: () => void;
  open: boolean;
}

const TodoModal = ({
  modifyContents,
  setModifyContents,
  onModifyTodo,
  handleClose,
  open,
}: PropTypes): JSX.Element => {
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      const { value } = e.target;
      setModifyContents(value);
    },
    [setModifyContents],
  );

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
        <DialogTitle id='form-dialog-title'>할일 수정하기</DialogTitle>
        <DialogContent>
          <TextField
            className='mb-7'
            autoFocus
            margin='normal'
            fullWidth={true}
            id='Todo_contents'
            value={modifyContents}
            onChange={onChange}
            label='Todo Contents'
            type='string'
          />
          <DialogContentText>
            우리가 만든 세상은 우리 생각의 과정이다. 우리의 생각을 바꾸지 않고는 새상은 바뀌지 않는다. -Albert
            Einstein-
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={onModifyTodo} color='primary'>
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TodoModal;

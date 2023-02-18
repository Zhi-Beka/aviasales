import { Space, Alert } from 'antd';
import { FC } from 'react';

interface IErrorProps {
  message: string;
}

export const ErrorIndicator: FC<IErrorProps> = (props) => {
  const { message } = props;
  const text = message ? message : 'something went wrong';
  return (
    <Space
      direction='vertical'
      size='middle'
      style={{
        display: 'flex',
        marginTop: '40px',
      }}
    >
      <Alert message={text} type='error' showIcon />
    </Space>
  );
};

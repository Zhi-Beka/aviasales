import { Spin } from 'antd/lib';
import { LoadingOutlined } from '@ant-design/icons';
import { FC } from 'react';
import style from './Loader.module.scss';

export const Loader: FC = () => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 48,
      }}
      spin
    />
  );

  return (
    <div className={style.spin}>
      <Spin indicator={antIcon} />
    </div>
  );
};

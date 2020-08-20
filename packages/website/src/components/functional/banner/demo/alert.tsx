import React from 'react';
import Banner from '@gio-design/components/es/components/Banner';
import { Link } from '@gio-design/components';
import '@gio-design/components/es/components/banner/style/index.css';

const alertContent = (
  <div>
    尊敬的客户您好，工单系统将于2月2日～2月10日暂停服务。
    <Link to="#">查看详情</Link>
  </div>
);

export default () => <Banner content={alertContent} type="alert" closeable={true} />;

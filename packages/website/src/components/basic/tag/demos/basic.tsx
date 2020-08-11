import React from 'react';
import { Tag } from '@gio-design/components';
import '@gio-design/components/es/components/tag/style/index.css';
import './index.less';

const Basics = () => (
  <>
    <Tag className="tag_website_demo_tag">超管</Tag>
    <Tag className="tag_website_demo_tag" status="success">
      已上线
    </Tag>
    <Tag className="tag_website_demo_tag" status="warning">
      待上线
    </Tag>
    <Tag className="tag_website_demo_tag" status="draft">
      草稿
    </Tag>
    <Tag className="tag_website_demo_tag" status="offline">
      已结束
    </Tag>
  </>
);

export default Basics;

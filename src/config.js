import Client, { returnCodes, composeData } from 'ynu-ws-client';

export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;

// 连接WS服务器的用户名和密码
export const wsToken = {
  username: process.env.WS_USERNAME,
  password: process.env.WS_PASSWORD,
};

// 接口ID
export const interfaces = {
  // 获取组织机构列表
  zzjg: '810000001',

  // 时间范围内应还图书借阅信息查询，需要认证
  yhts_by_timespan: '810000002',

  // 时间范围内应还图书统计
  yhts_tj_by_timespan: '810000003',
};

export const client = new Client(wsToken);

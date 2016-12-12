/*
eslint-disable no-underscore-dangle
 */
import { expect } from 'chai';
import { createRequest, createResponse } from 'node-mocks-http';
import { SUCCESS } from 'nagu-validates';
import { getZzjg } from '../src/zzjg';

describe('Standard Middlewares', () => {
  describe('getZzjg()', () => {
    it('正确获取数据', async () => {
      const req = createRequest();
      const res = createResponse();
      await getZzjg()(req, res);
      const result = res._getData();
      expect(result.ret).to.eql(SUCCESS);
      expect(result.data.length).to.above(0);
    });
  });
});

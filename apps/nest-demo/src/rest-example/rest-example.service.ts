import { Injectable } from '@nestjs/common'

const examples = [
  {
    id: 3,
    account: 'newuser',
    password: '$2b$10$fGT8W4FWInVm5HZ879DOTejl2dhdoipjs4s9qtRvRv08nI5bIDSCy',
    nickName: '新用户',
  },
  {
    id: 4,
    account: 'tempor',
    password: '$2b$10$1C7s6EioKVQ342.j87c0hOZqGpoXdR9xCMq3gh2pujEGMuuyynLqa',
    nickName: '其超',
  },
  {
    id: 5,
    account: 'sunt eiusmod officia',
    password: '$2b$10$9ZJJY3pXGh5WhN2Q1MacO.blmlLuR5cn5DPAS5AU28eLHh02SxXxi',
    nickName: '睢开慧',
  },
  {
    id: 6,
    account: 'do amet elit ',
    password: '$2b$10$4njHykxfstx9K0HXB2L3z.g19UtRDwstqyaXvAXSvi1VCtawstmKq',
    nickName: '储静怡',
  },
  {
    id: 7,
    account: '142vip',
    password: '$2b$10$2xpLVWXTkINJ51b6jIv31OYXD/1baTmtBvMsQoWijT6QloTQZ7kdi',
    nickName: '新用户',
  },
  {
    id: 8,
    account: 'cupidatat c',
    password: '$2b$10$qMe1Ho4WCf4T5Y.jszEFSeKRc1o2fWHCprqNE.ZpzIj9h8UfVFXO.',
    nickName: '校芳',
  },
  {
    id: 9,
    account: 'ipsum dolor',
    password: '$2b$10$fU7REKFpfElEV8AjIwmOUuH8LDKu9RL32EBoifnEXt.auI14hYeZ.',
    nickName: '苌家豪',
  },
  {
    id: 10,
    account: 'velitnon',
    password: '$2b$10$z87CV0F61PZnXdvCHW6snu3BruStEf8a9UJjis5lyJvfbZf4v6JF.',
    nickName: '杭浩辰',
  },
  {
    id: 11,
    account: 'mollit sit',
    password: '$2b$10$dJRtoBKC6LgNvZ5IryCfc.4DYL6FKnJqhVt9fFD22pwpMOO6T6.EO',
    nickName: '洋国芳',
  },
  {
    id: 12,
    account: 'consequat culpa Ex',
    password: '$2b$10$Y0306B6vvGQndk5elm.4gut4sB5Xeus2M5fQqtGqEJi9fhQyzlAMO',
    nickName: '窦伟',
  },
  {
    id: 13,
    account: 'incididunt sit cu',
    password: '$2b$10$yb1EfqUMJ7XqiTtKYnwAo.C0luSyUNB82Oa.Pakme4dmQ09SM0kCO',
    nickName: '寻国英',
  },
  {
    id: 14,
    account: 'enim Duis quis ',
    password: '$2b$10$G3z0SLnV6ZahTDKuKnxv9u27LBcp3JfgpYva7M8wGfxJysVFrdZmO',
    nickName: '匡建国',
  },
  {
    id: 15,
    account: 'irure proiden',
    password: '$2b$10$unqUDePoKddli9NAP2kKheZoYwKnIwnR8A36/jLIrfLL2auDwwYY2',
    nickName: '六雅鑫',
  },
]

@Injectable()
export class RestExampleService {
  public getExample() {
    return examples[0]
  }

  public getExampleList() {
    return examples
  }

  public createExample() {

  }

  public updateExample() {

  }

  public deleteExample() {

  }
}

import {ServiceModel} from '../../shared/service.model';

export const Additional: ServiceModel[] = [
  {
    name: 'Additional Service #1',
    price: 149,
    children: []
  },
  {
    name: 'Additional Service #2',
    price: 149,
    children: []
  },
  {
    name: 'Additional Service #3',
    price: 149,
    children: []
  },
  {
    name: 'Additional Service #4',
    price: 149,
    children: [
      {
        name: 'Additional Feature #1',
        price: 149,
        children: []
      },
      {
        name: 'Additional Feature #2',
        price: 149,
        children: []
      }
    ]
  },
  {
    name: 'Additional Service #5',
    price: 149,
    children: []
  }
];

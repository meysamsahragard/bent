import {ServiceModel} from '../../shared/service.model';

export const Services: ServiceModel[] = [
  {
    name: 'Service #1',
    price: 149,
    children: []
  },
  {
    name: 'Service #2',
    price: 149,
    children: []
  },
  {
    name: 'Service #3',
    price: 149,
    children: []
  },
  {
    name: 'Service #4',
    price: 149,
    children: [
      {
        name: 'Feature #1',
        price: 149,
        children: []
      },
      {
        name: 'Feature #2',
        price: 149,
        children: []
      }
    ]
  },
  {
    name: 'Service #5',
    price: 149,
    children: []
  }
];

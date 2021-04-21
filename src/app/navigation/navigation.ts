import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'assign-routes',
                title    : 'Sample',
                translate: 'Asignamiento de rutas',
                type     : 'item',
                icon     : 'local_shipping',
                url      : '/assign-routes', // airport_shuttle  commute departure_board map explore
            },
            {
                id       : 'route-tracking',
                title    : 'Sample',
                translate: 'Seguimiento de rutas',
                type     : 'item',
                icon     : 'gps_fixed',
                url      : '/route-tracking',   
            },
            {
                id       : 'ventas',
                title    : 'Sample',
                translate: 'Ventas',
                type     : 'item',
                icon     : 'store',
                url      : '/ventas',   
            }
        ]
    }
];

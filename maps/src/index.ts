import { User } from './User'; //community convention is to never use default exports
import { Company } from './Company';
import { CustomMap } from './CustomMap';

let user = new User();
let company = new Company();
const customMap = new CustomMap('#map');

customMap.addMarker(user);
customMap.addMarker(company);

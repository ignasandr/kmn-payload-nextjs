import { buildConfig } from 'payload/config';
import path from 'path';
import Examples from './collections/Examples';
import Users from './collections/Users';
import Menu from './globals/Menu';
import Media from './collections/Media'
import Pages from './collections/Pages'
import AdminLogo from './components/AdminGraphics/adminLogo';
import AdminIcon from './components/AdminGraphics/adminIcon';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
    css: path.resolve(__dirname, './utilities/cms.css'),
    meta: {
      ogImage: '/assets/kmn-logo.svg',
    },
    components: {
      graphics: {
        Logo: AdminLogo,
        Icon: AdminIcon
      }
    }
  },
  collections: [
    Users,
    Examples,
    Pages,
    Media
  ],
  globals: [
    Menu,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});

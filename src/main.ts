// import('./bootstrap')
// 	.catch(err => console.error(err));

import { initFederation } from '@angular-architects/module-federation';

initFederation('./federation.manifest.json').then(() => {
  import('./bootstrap').catch((err) => console.error(err));
});

// import { initFederation } from '@angular-architects/module-federation';
// import { AppModule } from './app/app.module';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// initFederation('reactApp@http://localhost:3000/remoteEntry.js').then(() => {
//   platformBrowserDynamic().bootstrapModule(AppModule)
//     .catch(err => console.error(err));
// });

// function loadRemoteEntry(remoteEntryUrl: string): Promise<void> {
//   return new Promise<void>((resolve, reject) => {
//     const script = document.createElement('script');
//     script.src = remoteEntryUrl;
//     script.onload = () => {
//       console.log(`${remoteEntryUrl} loaded successfully.`);
//       resolve();
//     };
//     script.onerror = () => reject(new Error(`Failed to load ${remoteEntryUrl}`));
//     document.head.appendChild(script);
//   });
// }

// loadRemoteEntry('http://localhost:3000/remoteEntry.js')
//   .then(() => {
//     console.log('Remote entry loaded, bootstrapping Angular...');
//     import('./bootstrap').catch((err) => console.error(err));
//   })
//   .catch((err) => console.error('Error loading remote entry:', err));

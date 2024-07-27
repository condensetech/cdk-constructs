import { awscdk, javascript } from 'projen';

const PNPM_VERSION = '9.6.0';

const project = new awscdk.AwsCdkConstructLibrary({
  name: '@condensetech/cdk-constructs',
  license: 'MIT',
  repositoryUrl: 'git@github.com:condensetech/cdk-constructs.git',
  description: "Condense's opinionated constructs and stacks for AWS CDK",
  keywords: ['aws', 'cdk', 'constructs', 'monitoring', 'cloudwatch', 'networking'],
  author: 'Condense s.r.l.',
  authorAddress: 'tech@condense.tech',
  authorOrganization: true,
  cdkVersion: '2.149.0',
  defaultReleaseBranch: 'main',
  stability: 'experimental',
  jsiiVersion: '~5.4.0',
  majorVersion: 0,
  prerelease: 'rc',
  projenrcTs: true,
  packageManager: javascript.NodePackageManager.PNPM,
  pnpmVersion: PNPM_VERSION,

  prettier: true,
  prettierOptions: {
    settings: {
      singleQuote: true,
      printWidth: 120,
    },
  },
  eslintOptions: {
    dirs: ['src', 'test'],
    prettier: true,
  },

  devDeps: ['husky'],

  publishToPypi: {
    distName: 'condensetech.cdk-constructs',
    module: 'condensetech.cdk_constructs',
  },
  // waiting for account created on ossrh
  // publishToMaven: {
  //   javaPackage: 'tech.condense.cdkconstructs',
  //   mavenGroupId: 'tech.condense',
  //   mavenArtifactId: 'cdkconstructs',
  //   mavenEndpoint: 'https://s01.oss.sonatype.org',
  // },
  publishToNuget: {
    packageId: 'CondenseTech.CdkConstructs',
    dotNetNamespace: 'CondenseTech.CdkConstructs',
  },
  publishToGo: {
    moduleName: 'github.com/condensetech/cdk-constructs',
  },
});
//+ See: https://github.com/projen/projen/issues/3070
project.package.addField('packageManager', `pnpm@${PNPM_VERSION}`);
project.npmrc.addConfig('package-manager-strict', 'false'); // allow minor/patch version updates of pnpm on dev boxes
//- See: https://github.com/projen/projen/issues/3070
project.synth();

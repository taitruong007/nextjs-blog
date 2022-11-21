import { exec } from '@actions/exec';

export const installDependencies = async () => {
  return await exec('yarn --check-files --frozen-lockfile --non-interactive');
};

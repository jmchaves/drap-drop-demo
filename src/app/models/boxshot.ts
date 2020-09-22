export class Boxshot {
  constructor(
    public assetId: number,
    public movieId: number,
    public filename: string,
    public width: number,
    public height: number,
    public contentLength: number,
    public md5: string,
    public deploymentTs: Date,
    public fullPath: string
  ) { }
}

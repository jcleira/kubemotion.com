# Kubemotion.com

This repository contains the kubemotion.com website. On June 2018 we still consider this website an MVP, probably we may remove this comment soon.

![Kubemotion](https://www.kubemotion.com/images/char.svg)

## Planned features

- [ ] Start using webpack to deploy the site or start using a static site generator.

## How to update the webiste

1. Clone this project:
```bash
git clone git@github.com:jcleira/kubemotion.com.git
```

2. Perform the changes, the website currently is created from static HTMLS.

3. Sync the folder with the kubemotion.com S3 bucket.
> You will need IAM access to the Kubemotion AWS account.
```bash
aws s3 sync . s3://www.kubemotion.com
```

4. Invalidate the assets on the Cloudfront distribution.
```bash
aws cloudfront create-invalidation --distribution-id E1WJ15DAU0VDB1 --paths "/*"
```

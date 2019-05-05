#!/bin/bash

npm run build && aws s3 sync build/ s3://${quotes.claygardner.io-cdn}

# Will want a cache invalidation step for cloudfront
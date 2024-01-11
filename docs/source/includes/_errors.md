# Errors

<aside class="notice">
This error section is stored in a separate file in <code>includes/_errors.md</code>. Slate allows you to optionally separate out your docs into many files...just save them to the <code>includes</code> folder and add them to the top of your <code>index.md</code>'s frontmatter. Files are included in the order listed.
</aside>

The Bikr API uses the following error codes:


Error Code | Meaning
---------- | -------
400 | Bonked Request -- Your request is invalid.
401 | Dropped -- Your API key is wrong.
403 | Yellow Jersey Only -- The bike you requested is hidden for TdF leaders only.
404 | Not Found -- The specified bike could not be found.
405 | Drafting Not Allowed -- You tried to access a TT bike with an invalid method.
406 | Not Acceptable -- You requested a format that isn't json.
410 | Gone -- The bike requested has been removed from our servers.
429 | Too Many Requests -- You're requesting too many bicycles! Ain't rich!
500 | Internal Server Error -- We had a problem with our server. Try again later.
503 | Service Unavailable -- We're temporarily offline for maintenance. Please try again later.

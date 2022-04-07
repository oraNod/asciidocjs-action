# asciidocjs-action
A GitHub action that uses asciidoctor.js to convert asciidoc files to HTML

1. Add the following to your workflow:

```yaml
- uses: oraNod/asciidocjs-action@v1.3
      with:
        docs_path: path/to/asciidoc/
```

2. Change the value of `docs_path` to the directory that holds `asciidoc` files to convert. You can include regular expressions. 

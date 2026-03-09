# Jakub Jakubec — CV

## 📄 [Download resume.pdf](https://github.com/Kobu/resume/raw/main/resume.pdf)

---

<details>
<summary>Technical details</summary>

### Stack

- React + TypeScript
- [`@react-pdf/renderer`](https://react-pdf.org/) — PDF generation
- [`react-pdf-tailwind`](https://github.com/diegomura/react-pdf-tailwind) — Tailwind utility classes for react-pdf

### Development

```bash
npm start   # open PDF preview in browser at localhost:3000
```

### How it works

The CV is a React component tree rendered directly to PDF via `@react-pdf/renderer`.
A GitHub Action runs on every push to `main`, renders the PDF in Node using `tsx`, and commits the result back as `resume.pdf`.

</details>

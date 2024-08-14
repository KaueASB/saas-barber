import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-400">
            © 2024 Copyright {""}
            <a
              href="https://kjdev.com.br"
              target="_blank"
              className="font-bold hover:text-primary hover:underline"
            >
              KJR Desenvolvimento
            </a>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer

import NextAuth, { AuthOptions, Session } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "lib/mongodb"
import { MAIN_BACKGROUND, PRIMARY_TEXT_COLOR, RED_LOGO_COLOR, SECONDARY_TEXT_COLOR } from "~/components/common/globalStyles"

export const authOptions: AuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID || '',
    //   clientSecret: process.env.GITHUB_SECRET || '',
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || '814241394166-v4hruj0iul88pq7mq7fpjpc41sifpr96.apps.googleusercontent.com',
      clientSecret: process.env.GOOGLE_SECRET || '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',
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      },
    }),
    // Passwordless / email sign in
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_SERVER_PORT || '0') || 465,
        auth: {
          user: process.env.EMAIL_SERVER_USER || "admin@bugfunction.com",
          pass: process.env.EMAIL_SERVER_PASSWORD || "{Willyums11G}",
        }
      },
      from: 'Mitey <noreply@bugfunction.com>'
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      (session as Record<string, any>).accessToken = token.accessToken
      return session
    }
  },
  jwt: {
    // signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    //
    // // You can also specify a public key for verification if using public/private key (but private only is fine)
    // verificationKey: process.env.JWT_SIGNING_PUBLIC_KEY,
    //
    // // If you want to use some key format other than HS512 you can specify custom options to use
    // // when verifying (note: verificationOptions should include a value for maxTokenAge as well).
    // // verificationOptions = {
    // //   maxTokenAge: `${maxAge}s`, // e.g. `${30 * 24 * 60 * 60}s` = 30 days
    // //   algorithms: ['HS512']
    // // },

    secret: process.env.JWT_SECRET || 'gjuiytkg7869bg8769kf764ifvk',
  },
  theme: {
    colorScheme: "dark", // "auto" | "dark" | "light"
    brandColor: PRIMARY_TEXT_COLOR, // Hex color code
    logo: "http://localhost:3000/images/red-mitey-logo.svg", // Absolute URL to image
    buttonText: PRIMARY_TEXT_COLOR, // Hex color code
  },
}
export default NextAuth(authOptions)

import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';

export const LinkSection = () => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className='text-2xl'>Link</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Links allow users to navigate to other pages or resources.</p>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 1: Basic link</h3>
            <a href="https://github.com/VlO-OlV" className="text-blue-600 hover:underline">Click here</a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Example 2: Link in new tab</h3>
            <a href="https://github.com/VlO-OlV" className="text-blue-600 hover:underline" target='_blank'>Click here</a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
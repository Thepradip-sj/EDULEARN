import { DashboardLayout } from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Download, Share2 } from 'lucide-react';
import { toast } from 'sonner';

export default function StudentCertificates() {
  const certificates = [
    {
      id: '1',
      courseName: 'Database Design',
      completionDate: '2024-01-10',
      certificateNumber: 'CERT-2024-001',
      instructor: 'Jane Instructor',
    },
  ];

  const handleDownload = (certId: string) => {
    toast.success('Certificate downloaded!');
  };

  const handleShare = (certId: string) => {
    toast.success('Certificate link copied to clipboard!');
  };

  return (
    <DashboardLayout role="student" userName="John Student">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">My Certificates</h1>
          <p className="text-muted-foreground">View and download your earned certificates</p>
        </div>

        {certificates.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Award className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Certificates Yet</h3>
              <p className="text-muted-foreground text-center">
                Complete courses to earn certificates
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {certificates.map((cert) => (
              <Card key={cert.id} className="overflow-hidden">
                <div className="bg-gradient-to-br from-primary to-secondary p-8 text-white">
                  <Award className="h-16 w-16 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Certificate of Completion</h3>
                  <p className="text-white/90">EduLearn Learning Management System</p>
                </div>
                <CardHeader>
                  <CardTitle>{cert.courseName}</CardTitle>
                  <CardDescription>
                    Completed on {new Date(cert.completionDate).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Certificate No:</span>
                      <Badge variant="secondary">{cert.certificateNumber}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Instructor:</span>
                      <span className="font-medium">{cert.instructor}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="default" 
                      className="flex-1"
                      onClick={() => handleDownload(cert.id)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button 
                      variant="secondary" 
                      className="flex-1"
                      onClick={() => handleShare(cert.id)}
                    >
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

import { motion } from "framer-motion";
import { Card } from "../ui/card";
import {
  ArrowUp,
  Globe,
  Play,
  Plus,
  Sparkles,
  Brain,
  Workflow,
  Zap,
  Database,
  Shield,
  Wheat,
  Leaf,
  TreePine,
  Waves,
  BarChart3,
  Satellite,
  Eye,
  CheckCircle,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="features">
      <div className="py-24">
        <div className="mx-auto w-full max-w-3xl px-6">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-foreground text-balance text-3xl font-semibold md:text-4xl"
          >
            <span className="text-muted-foreground">
              The Klimata™ Intelligence Engine
            </span>{" "}
            From Raw Satellite Data to Financial-Grade Truth
          </motion.h2>
          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            {/* Feature 1 */}
            <div className="col-span-full space-y-4">
              <Card className="overflow-hidden px-6 sm:col-span-2">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mask-b-from-75% mx-auto -mt-2 max-w-sm px-2 pt-8"
                >
                  <DataIngestionIllustration />
                </motion.div>
              </Card>
              <div className="max-w-md sm:col-span-3">
                <motion.h3 className="text-foreground text-lg font-semibold">
                  Ingest. Process Petabytes of Multi-Source Data.
                </motion.h3>
                <motion.p className="text-muted-foreground mt-3 text-balance">
                  We process petabytes of multi-source data from the world's most reliable sources, including the European Space Agency's Sentinel satellites.
                </motion.p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="grid grid-rows-[1fr_auto] space-y-4">
              <Card className="p-6">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <AIAnalysisIllustration />
                </motion.div>
              </Card>
              <div>
                <h3 className="text-foreground text-lg font-semibold">
                  Analyze. Proprietary AI & Scientific Models.
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  Our proprietary AI and scientifically-validated models translate raw pixels into precise, auditable metrics.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="grid grid-rows-[1fr_auto] space-y-4">
              <Card className="overflow-hidden p-6">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <DeliveryIllustration />
                </motion.div>
              </Card>
              <div>
                <h3 className="text-foreground text-lg font-semibold">
                  Deliver. Verifiable Insights & Reports.
                </h3>
                <p className="text-muted-foreground mt-3 text-balance">
                  The engine delivers verifiable insights through our specialized CarbonNexus solutions for decisive action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


const DataIngestionIllustration = () => {
  return (
    <Card
      aria-hidden
      className="p-4 transition-transform duration-200 group-hover:translate-y-0"
    >
      {/* Satellite Data Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="bg-foreground/5 flex size-8 items-center justify-center rounded-lg border">
          <Satellite className="size-4 text-foreground/60" />
        </div>
        <div>
          <div className="text-sm font-medium">ESA Sentinel Satellites</div>
          <div className="text-muted-foreground text-xs">Multi-source data streams</div>
        </div>
      </div>

      {/* Data Stats */}
      <div className="mb-4 flex gap-4 text-muted-foreground">
        <div className="flex items-center gap-1">
          <Database className="size-3" />
          <span className="text-xs">2.4PB</span>
        </div>
        <div className="flex items-center gap-1">
          <Globe className="size-3" />
          <span className="text-xs">ASEAN</span>
        </div>
        <div className="flex items-center gap-1">
          <Eye className="size-3" />
          <span className="text-xs">Live</span>
        </div>
      </div>

      {/* Data Sources */}
      <div className="bg-foreground/5 rounded-lg p-3 space-y-2 border">
        <div className="text-muted-foreground text-xs font-medium mb-2">
          Data Sources
        </div>
        <div className="space-y-1.5 text-xs">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-foreground/20 size-1.5 rounded-full"></div>
            <span>Sentinel-1 (Radar)</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-foreground/20 size-1.5 rounded-full"></div>
            <span>Sentinel-2 (Optical)</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-foreground/20 size-1.5 rounded-full"></div>
            <span>Weather Stations</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="bg-foreground/20 size-1.5 rounded-full"></div>
            <span>Field Sensors</span>
          </div>
        </div>
      </div>

      {/* Processing Badge */}
      <div className="mt-3 flex justify-center">
        <div className="bg-foreground/10 text-foreground/80 px-2 py-1 rounded-full text-xs font-medium border">
          Real-time Processing
        </div>
      </div>
    </Card>
  );
};

const AIAnalysisIllustration = () => {
  return (
    <Card aria-hidden className="p-4">
      {/* AI Brain */}
      <div className="mb-4 flex justify-center">
        <div className="bg-foreground/10 flex size-10 items-center justify-center rounded-full border">
          <Brain className="size-5 text-foreground/60" />
        </div>
      </div>

      {/* AI Status */}
      <div className="mb-4 text-center">
        <div className="text-sm font-medium">Klimata™ AI Engine</div>
        <div className="text-muted-foreground text-xs flex items-center justify-center gap-1 mt-1">
          <div className="bg-foreground/40 size-1.5 rounded-full"></div>
          Processing & Analyzing
        </div>
      </div>

      {/* Analysis Flow */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
            <Eye className="size-3 text-foreground/60" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium text-foreground/80">
              Pixel Analysis
            </div>
            <div className="bg-foreground/10 h-1 rounded-full mt-1">
              <div className="bg-foreground/40 h-full w-full rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
            <BarChart3 className="size-3 text-foreground/60" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium text-foreground/80">
              Metric Generation
            </div>
            <div className="bg-foreground/10 h-1 rounded-full mt-1">
              <div className="bg-foreground/40 h-full w-3/4 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-foreground/5 flex size-6 items-center justify-center rounded-lg border">
            <CheckCircle className="size-3 text-foreground/60" />
          </div>
          <div className="flex-1">
            <div className="text-xs font-medium text-foreground/80">
              Validation
            </div>
            <div className="bg-foreground/10 h-1 rounded-full mt-1">
              <div className="bg-foreground/40 h-full w-1/2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Processing Indicator */}
      <div className="mt-4 text-center">
        <div className="text-muted-foreground text-xs">
          Generating auditable metrics...
        </div>
      </div>
    </Card>
  );
};

const DeliveryIllustration = () => {
  return (
    <div aria-hidden className="relative">
      {/* Main Delivery Hub */}
      <Card className="p-4">
        <div className="mb-3 flex items-center justify-center">
          <div className="bg-foreground/10 flex size-8 items-center justify-center rounded-full border">
            <Workflow className="size-4 text-foreground/60" />
          </div>
        </div>

        <div className="text-center mb-4">
          <div className="text-sm font-medium">CarbonNexus Solutions</div>
          <div className="text-muted-foreground text-xs">Verifiable & Actionable</div>
        </div>

        {/* Solution Outputs */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <Wheat className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              Rice MRV
            </div>
          </div>
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <Shield className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              Supply Chain
            </div>
          </div>
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <TreePine className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              Deforestation
            </div>
          </div>
          <div className="bg-foreground/5 rounded-lg p-2 text-center border">
            <Waves className="size-3 mx-auto mb-1 text-foreground/60" />
            <div className="text-xs font-medium text-muted-foreground">
              Blue Carbon
            </div>
          </div>
        </div>
      </Card>

      {/* Connection Lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-foreground/10 h-px w-full"></div>
      </div>
    </div>
  );
};
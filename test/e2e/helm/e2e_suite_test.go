package helm_test

import (
	"testing"

	. "github.com/onsi/ginkgo/v2"

	"github.com/kumahq/kuma/pkg/test"
	"github.com/kumahq/kuma/test/e2e/helm"
)

func TestE2E(t *testing.T) {
	test.RunSpecs(t, "E2E Helm Suite")
}

var _ = Describe("Test Control Plane autoscaling with Helm chart", Label("arm-not-supported"), helm.ControlPlaneAutoscalingWithHelmChart)
var _ = Describe("Test Zone and Global with Helm chart", Label("arm-not-supported"), helm.ZoneAndGlobalWithHelmChart)
var _ = Describe("Test App deployment with Helm chart", Label("arm-not-supported"), helm.AppDeploymentWithHelmChart)
var _ = Describe("Test upgrading with Helm chart", Label("arm-not-supported"), helm.UpgradingWithHelmChart)
